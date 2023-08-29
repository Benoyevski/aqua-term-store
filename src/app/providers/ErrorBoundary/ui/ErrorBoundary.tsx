/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {ErrorInfo, ReactNode} from 'react'
import { PageError } from '../../../../shared/ui/PageError';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
        return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }
  
    render() {
        const {hasError} = this.state;
        const {children} = this.props;

        if (hasError) {
            return <PageError/>;
        }
  
        return children; 
    }
}

export default ErrorBoundary;