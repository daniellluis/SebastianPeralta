export function Footer() {
  return (
    <footer id="footer" className="py-8 px-4 border-t border-muted">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Sebastian Peralta. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
