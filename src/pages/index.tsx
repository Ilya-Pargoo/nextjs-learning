function Home() {
  return <div></div>;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/top-stories',
      permanent: false,
    },
  };
};

export default Home;
