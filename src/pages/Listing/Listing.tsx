import { useQuery } from 'react-query';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Heading from 'components/Heading';
import Navbar from 'components/Navbar';
import ErrorInfo from 'components/ErrorInfo';
import ListItem from 'components/ListItem';
import ListItemSkeleton from 'components/ListItemSkeleton';
import api from 'api';

const Listing = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery('list', () => {
    return api.getList();
  });

  const renderList = () => {
    if (isLoading) {
      const items = Array.from(Array(10).keys());

      return items.map((i) => {
        const id = i + 1;
        const isLast = id === 10;
        return <ListItemSkeleton key={id} isLast={isLast} />;
      });
    }

    if (isError) {
      return (
        <ErrorInfo
          title="An error occurred while processing your request"
          description="Please try again later"
        />
      );
    }

    if (!data || data.length === 0) {
      return (
        <ErrorInfo
          title="No data was found for your request"
          description="Please try again later"
        />
      );
    }

    return data.map((item, i) => {
      const id = i + 1;
      const isLast = id === 10;
      return <ListItem key={id} data={item} isLast={isLast} />;
    });
  };

  return (
    <>
      <Navbar />
      <Heading title="Top 10 Crypto Exchanges ranked by Trust Score Rank" />
      <main className="pt-6 lg:pt-8 pb-12" role="main">
        <Container>{renderList()}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Listing;
