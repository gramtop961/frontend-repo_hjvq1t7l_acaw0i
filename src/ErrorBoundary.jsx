import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // You could log this to a service
    console.error('App crashed:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6 text-center">
          <div className="max-w-lg">
            <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
            <p className="mt-3 text-white/70">The page failed to load. Please refresh. If the issue persists, let us know.</p>
            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <pre className="mt-4 text-left text-xs text-red-300 bg-red-900/30 p-3 rounded">{String(this.state.error)}</pre>
            )}
            <button onClick={() => window.location.reload()} className="mt-6 px-4 py-2 rounded bg-pink-500 text-white font-semibold">Reload</button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
