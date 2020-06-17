import Header from './layouts/Header'

const Index = () => {
  return (
    <>
      <Header />
      <main style={{ display:'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Welcome to the news portal!</h1>
        <p>Here you will find a selection of news from the categories presented.</p>
        <p>The news category is selected with the Select a News Category button.</p>
      </main>
    </>
  );
}

export default Index