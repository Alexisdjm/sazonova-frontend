import { Header, Footer, Breadcrumbs } from "./";

export default function NotFound() {
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
