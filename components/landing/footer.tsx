export function Footer() {
  return (
    <footer id="footer" className="pt-8 pb-24 px-4 border-t border-muted">
      <div className="max-w-4xl mx-auto text-center space-y-1">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Sebastian Peralta. Todos los derechos reservados.
        </p>
        <p className="text-muted-foreground/60 text-xs">
          Diseñado por{" "}
          <a href="mailto:daniellluis@gmail.com" className="hover:text-muted-foreground transition-colors underline underline-offset-2">
            daniellluis
          </a>
        </p>
      </div>
    </footer>
  )
}
