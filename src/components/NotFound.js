import { Header, Footer, Breadcrumbs } from "./";
import { usePageMeta } from "../seo/usePageMeta";

export default function NotFound() {
  usePageMeta({
    title: "Página no encontrada | Sazonova",
    description: "Esta página no existe en el sitio de Sazonova.",
    path: "/404",
    robots: "noindex, follow",
  });

  return (
    <>
      <Header scrollAware={false} />
      <main className="pt-28 md:pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto mb-6">
          <Breadcrumbs
            items={[
              { label: "Inicio", to: "/" },
              { label: "Página no encontrada" },
            ]}
          />
        </div>
        <div className="text-center text-4xl font-sugo text-primary-red py-16">
          404 - Not Found
        </div>
      </main>
      <Footer />
    </>
  );
}
