"use client";

import { useMemo, useState, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Product, HairQuality, Density, LaceType, Texture, Colour, CapSize, SortOption } from "@/types";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { X, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const HAIR_QUALITIES: HairQuality[] = ["100% Human Hair", "Virgin", "Remy", "Synthetic"];
const DENSITIES: Density[] = ["130%", "150%", "180%", "200%+"];
const LACE_TYPES: LaceType[] = ["HD Lace", "Transparent Lace", "13x4 Frontal", "5x5 Closure", "Full Lace"];
const TEXTURES: Texture[] = ["Straight", "Body Wave", "Deep Wave", "Curly", "Bob"];
const COLOURS: Colour[] = ["Natural Black", "Brown", "Blonde", "Ombre", "Custom"];
const CAP_SIZES: CapSize[] = ["Small", "Medium", "Large", "Adjustable"];
const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "bestselling", label: "Bestselling" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

interface ShopContentProps {
  products: Product[];
}

export function ShopContent({ products }: ShopContentProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Parse filters from URL
  const filters = useMemo(() => {
    return {
      hairQuality: (searchParams.get("quality")?.split(",").filter(Boolean) || []) as HairQuality[],
      density: (searchParams.get("density")?.split(",").filter(Boolean) || []) as Density[],
      laceType: (searchParams.get("lace")?.split(",").filter(Boolean) || []) as LaceType[],
      texture: (searchParams.get("texture")?.split(",").filter(Boolean) || []) as Texture[],
      colour: (searchParams.get("colour")?.split(",").filter(Boolean) || []) as Colour[],
      capSize: (searchParams.get("cap")?.split(",").filter(Boolean) || []) as CapSize[],
      lengthMin: Number(searchParams.get("lenMin") || 8),
      lengthMax: Number(searchParams.get("lenMax") || 40),
      priceMin: Number(searchParams.get("priceMin") || 0),
      priceMax: Number(searchParams.get("priceMax") || 10000),
      sort: (searchParams.get("sort") as SortOption) || "newest",
    };
  }, [searchParams]);

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === "") params.delete(key);
        else params.set(key, value);
      });
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  const toggleMulti = (key: string, value: string, current: string[]) => {
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    updateParams({ [key]: next.length ? next.join(",") : null });
  };

  const clearAll = () => {
    router.push(pathname, { scroll: false });
  };

  const activeChips = useMemo(() => {
    const chips: { key: string; label: string; onRemove: () => void }[] = [];
    filters.hairQuality.forEach((v) =>
      chips.push({
        key: `q-${v}`,
        label: v,
        onRemove: () => toggleMulti("quality", v, filters.hairQuality),
      })
    );
    filters.density.forEach((v) =>
      chips.push({
        key: `d-${v}`,
        label: v,
        onRemove: () => toggleMulti("density", v, filters.density),
      })
    );
    filters.laceType.forEach((v) =>
      chips.push({
        key: `l-${v}`,
        label: v,
        onRemove: () => toggleMulti("lace", v, filters.laceType),
      })
    );
    filters.texture.forEach((v) =>
      chips.push({
        key: `t-${v}`,
        label: v,
        onRemove: () => toggleMulti("texture", v, filters.texture),
      })
    );
    filters.colour.forEach((v) =>
      chips.push({
        key: `c-${v}`,
        label: v,
        onRemove: () => toggleMulti("colour", v, filters.colour),
      })
    );
    filters.capSize.forEach((v) =>
      chips.push({
        key: `cap-${v}`,
        label: v,
        onRemove: () => toggleMulti("cap", v, filters.capSize),
      })
    );
    if (filters.lengthMin > 8 || filters.lengthMax < 40) {
      chips.push({
        key: "len",
        label: `${filters.lengthMin}"–${filters.lengthMax}"`,
        onRemove: () => updateParams({ lenMin: null, lenMax: null }),
      });
    }
    return chips;
  }, [filters]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.hairQuality.length)
      result = result.filter((p) => filters.hairQuality.includes(p.hairQuality));
    if (filters.density.length)
      result = result.filter((p) =>
        p.variants.some((v) => filters.density.includes(v.density))
      );
    if (filters.laceType.length)
      result = result.filter((p) =>
        p.variants.some((v) => filters.laceType.includes(v.laceType))
      );
    if (filters.texture.length)
      result = result.filter((p) =>
        p.textures.some((t) => filters.texture.includes(t))
      );
    if (filters.colour.length)
      result = result.filter((p) =>
        p.colours.some((c) => filters.colour.includes(c))
      );
    if (filters.capSize.length)
      result = result.filter((p) =>
        p.capSizes.some((c) => filters.capSize.includes(c))
      );

    // Length range via variants
    result = result.filter((p) =>
      p.variants.some(
        (v) => v.length >= filters.lengthMin && v.length <= filters.lengthMax
      )
    );

    // Price range
    result = result.filter(
      (p) => p.basePrice >= filters.priceMin && p.basePrice <= filters.priceMax
    );

    // Sort
    switch (filters.sort) {
      case "price-asc":
        result.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case "price-desc":
        result.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case "bestselling":
        result.sort((a, b) => Number(b.isBestseller) - Number(a.isBestseller) || b.reviewCount - a.reviewCount);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
      default:
        result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
    }

    return result;
  }, [products, filters]);

  const FilterSection = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">{title}</h3>
      {children}
    </div>
  );

  const CheckboxGroup = ({
    options,
    selected,
    paramKey,
  }: {
    options: string[];
    selected: string[];
    paramKey: string;
  }) => (
    <div className="space-y-2">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2.5 cursor-pointer group">
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => toggleMulti(paramKey, opt, selected)}
            className="h-4 w-4 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]"
          />
          <span className="text-sm text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]">
            {opt}
          </span>
        </label>
      ))}
    </div>
  );

  const FiltersPanel = () => (
    <div className="space-y-8">
      <FilterSection title="Hair Quality">
        <CheckboxGroup options={HAIR_QUALITIES} selected={filters.hairQuality} paramKey="quality" />
      </FilterSection>
      <FilterSection title="Texture / Style">
        <CheckboxGroup options={TEXTURES} selected={filters.texture} paramKey="texture" />
      </FilterSection>
      <FilterSection title="Density">
        <CheckboxGroup options={DENSITIES} selected={filters.density} paramKey="density" />
      </FilterSection>
      <FilterSection title="Lace Type">
        <CheckboxGroup options={LACE_TYPES} selected={filters.laceType} paramKey="lace" />
      </FilterSection>
      <FilterSection title="Colour">
        <CheckboxGroup options={COLOURS} selected={filters.colour} paramKey="colour" />
      </FilterSection>
      <FilterSection title="Cap Size">
        <CheckboxGroup options={CAP_SIZES} selected={filters.capSize} paramKey="cap" />
      </FilterSection>
      <FilterSection title="Length (inches)">
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs text-[var(--muted-foreground)]">Min</label>
              <input
                type="number"
                min={8}
                max={40}
                value={filters.lengthMin}
                onChange={(e) =>
                  updateParams({ lenMin: e.target.value })
                }
                className="mt-1 w-full h-9 rounded-md border border-[var(--border)] px-2 text-sm"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-[var(--muted-foreground)]">Max</label>
              <input
                type="number"
                min={8}
                max={40}
                value={filters.lengthMax}
                onChange={(e) =>
                  updateParams({ lenMax: e.target.value })
                }
                className="mt-1 w-full h-9 rounded-md border border-[var(--border)] px-2 text-sm"
              />
            </div>
          </div>
        </div>
      </FilterSection>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Desktop Filters */}
      <aside className="hidden lg:block w-60 shrink-0">
        <div className="sticky top-28">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-medium">Filters</h2>
            {activeChips.length > 0 && (
              <button
                onClick={clearAll}
                className="text-xs text-[var(--primary)] hover:underline"
              >
                Clear all
              </button>
            )}
          </div>
          <FiltersPanel />
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-1.5" />
              Filters
              {activeChips.length > 0 && (
                <span className="ml-1.5 bg-[var(--primary)] text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                  {activeChips.length}
                </span>
              )}
            </Button>
            <p className="text-sm text-[var(--muted-foreground)]">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>

          <select
            value={filters.sort}
            onChange={(e) => updateParams({ sort: e.target.value })}
            className="h-9 rounded-md border border-[var(--border)] bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            aria-label="Sort products"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {/* Active chips */}
        {activeChips.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activeChips.map((chip) => (
              <button
                key={chip.key}
                onClick={chip.onRemove}
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--muted)] px-3 py-1 text-xs font-medium hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                {chip.label}
                <X className="h-3 w-3" />
              </button>
            ))}
            <button
              onClick={clearAll}
              className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] underline ml-1"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[var(--muted-foreground)] mb-4">
              No products match your filters
            </p>
            <Button variant="outline" onClick={clearAll}>
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] bg-white rounded-t-2xl shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
              <h2 className="font-medium">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-y-auto p-4 flex-1">
              <FiltersPanel />
            </div>
            <div className="p-4 border-t border-[var(--border)] flex gap-3">
              <Button variant="outline" className="flex-1" onClick={clearAll}>
                Clear
              </Button>
              <Button className="flex-1" onClick={() => setMobileFiltersOpen(false)}>
                Show {filtered.length} results
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
