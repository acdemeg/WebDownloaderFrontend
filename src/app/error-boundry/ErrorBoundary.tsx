import React, { Component, type ReactNode } from 'react';
import './error-indicator.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false };

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-indicator">
          <img src="/death-star.png" alt="error icon" width="256px" height="256px" />
          <span className="boom">BOOM!</span>
          <span>something has gone terribly wrong</span>
          <span>(but we already sent droids to fix it)</span>
        </div>
      );
    }

    return this.props.children;
  }
}
