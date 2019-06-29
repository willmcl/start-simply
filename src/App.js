import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/styling';
import GlobalStyles from './atoms/GlobalStyles';
import Navigation from './organisms/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <GlobalStyles/>
            <header className="App-header">
              <h2>Welcome to the website</h2>
              <Navigation/>
            </header>
            <main>
              <Route path="/" exact component={Index} />
              <Route path="/about/" component={About} />
            </main>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
