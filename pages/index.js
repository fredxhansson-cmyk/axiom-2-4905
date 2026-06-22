import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Head>
        <title>Hållbart Mode för Alla</title>
        <meta name="description" content="Upptäck unika plagg för varje stil i vår premium second-hand modebutik." />
      </Head>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5em', margin: '0 0 0.5em' }}>Hållbart Mode för Alla</h1>
        <p style={{ fontSize: '1.5em', margin: '0 0 1em' }}>Upptäck unika plagg för varje stil</p>
        <button>Handla nu (Från 199 kr)</button>
      </header>
      <section style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <div>
          <h3>Certifierad av Fair Wear</h3>
        </div>
        <div>
          <h3>Kundrecensioner över 4.5</h3>
        </div>
        <div>
          <h3>100% Återvunna Material</h3>
        </div>
      </section>
    </div>
  );
}