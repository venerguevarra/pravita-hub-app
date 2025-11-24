import { Button } from 'pravita-react-ds'; 

function App() {
  return (
    <main
      style={{
        padding: '24px',
        fontFamily:
          "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <h1>Pravita Hub App</h1>
      <p>This app is now using the shared React design system library.</p>

      <section
        style={{
          marginTop: '16px',
          display: 'flex',
          gap: '12px',
        }}
      >
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="subtle">Subtle</Button>
      </section>
    </main>
  );
}

export default App;
