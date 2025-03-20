import './App.css'
import { images } from './assets/images'

function App() {
  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-main font-bold text-primary">El Tartista</h1>
          <a
            href="https://wa.me/593978981018"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 sm:px-6 py-2 rounded-full font-main hover:bg-opacity-90 transition-all flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir por WhatsApp
          </a>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-8 sm:py-16 bg-gradient-to-b from-white to-light-bg rounded-3xl mb-8 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-main font-bold text-text mb-4 sm:mb-6">Postres Artísticos<br/>Hechos con Amor</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">Creamos postres únicos que son verdaderas obras de arte, perfectos para hacer especial cualquier ocasión</p>
          <a
            href="https://wa.me/593978981018"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-main text-base sm:text-lg hover:bg-opacity-90 transition-all inline-block w-full sm:w-auto"
          >
            Hacer un Pedido
          </a>
        </section>

        {/* Featured Products */}
        <section className="mb-16">
          <h3 className="text-3xl font-main font-bold text-text mb-8 text-center">Nuestras Creaciones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.src} 
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-main font-semibold mb-2">{product.title}</h4>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-main font-bold text-text mb-6">¿Listo para ordenar?</h3>
          <p className="text-xl text-gray-600 mb-8">Contáctanos por WhatsApp para hacer tu pedido personalizado</p>
          <a
            href="https://wa.me/593978981018"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-full font-main text-lg hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            +593 97 898 1018
          </a>
        </section>
      </main>

      {/* Testimonials Section */}
      <section className="bg-white py-16 mt-8">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-main font-bold text-text mb-12 text-center">Lo que dicen nuestros clientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-light-bg p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <h4 className="font-main font-semibold">{testimonial.name}</h4>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text text-white mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-main font-bold mb-4">El Tartista</h4>
              <p className="text-gray-300">Creando momentos dulces y memorables para tus celebraciones especiales.</p>
            </div>
            <div>
              <h5 className="font-main font-semibold mb-4">Contacto</h5>
              <p className="text-gray-300 mb-2">WhatsApp: +593 97 898 1018</p>
              <p className="text-gray-300">Guayaquil, Ecuador</p>
            </div>
            <div>
              <h5 className="font-main font-semibold mb-4">Horario</h5>
              <p className="text-gray-300 mb-2">Lunes a Viernes: 9:00 - 18:00</p>
              <p className="text-gray-300">Sábados: 9:00 - 14:00</p>
            </div>
            <div>
              <h5 className="font-main font-semibold mb-6 text-xl">Síguenos en redes sociales</h5>
              <div className="flex items-center justify-center gap-6">
                <a href="https://www.instagram.com/eltartista" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-all duration-300">
                    <span className="w-6 h-6" dangerouslySetInnerHTML={{ __html: images.socialIcons.instagram }} />
                  </div>
                  <span className="block text-center mt-2 text-sm text-gray-300 group-hover:text-primary transition-colors">@eltartista</span>
                </a>
                <a href="https://www.tiktok.com/@eltartista" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-all duration-300">
                    <span className="w-6 h-6" dangerouslySetInnerHTML={{ __html: images.socialIcons.tiktok }} />
                  </div>
                  <span className="block text-center mt-2 text-sm text-gray-300 group-hover:text-primary transition-colors">@eltartista</span>
                </a>
                <a href="https://wa.me/593978981018" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-all duration-300">
                    <span className="w-6 h-6" dangerouslySetInnerHTML={{ __html: images.socialIcons.whatsapp }} />
                  </div>
                  <span className="block text-center mt-2 text-sm text-gray-300 group-hover:text-primary transition-colors">@eltartista</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} El Tartista. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}

    </div>
  )
}

export default App
