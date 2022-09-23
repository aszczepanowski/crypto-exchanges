import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Heading from 'components/Heading';
import Navbar from 'components/Navbar';
import ErrorInfo from 'components/ErrorInfo';
import DetailsBox from 'components/DetailsBox';
import DetailsBoxSkeleton from 'components/DetailsBoxSkeleton';
import api from 'api';
import { useEffect } from 'react';

const Details = (): JSX.Element => {
  // Get the ID param from the URL
  const { id } = useParams();
  const {
    data,
    isLoading,
    isError,
    remove: resetQuery
  } = useQuery('details', () => {
    return api.getDetails(id as string);
  });

  const getHeadingTitle = () => {
    if (isLoading) {
      return 'Loading data...';
    }

    if (isError) {
      return 'Request error';
    }

    if (!data || Object.keys(data).length === 0) {
      return 'Data not found';
    }

    return data.name;
  };

  const renderDetails = () => {
    if (isLoading) {
      return <DetailsBoxSkeleton />;
    }

    if (isError) {
      return (
        <ErrorInfo
          title="An error occurred while processing your request"
          description="Please try again later"
        />
      );
    }

    if (!data || Object.keys(data).length === 0) {
      return (
        <ErrorInfo
          title="No data was found for your request"
          description="Please try again later"
        />
      );
    }

    return <DetailsBox data={data} />;
  };

  /**
   * Reset component state after component is unmounted.
   */
  useEffect(() => {
    return () => resetQuery();
  }, [resetQuery]);

  return (
    <>
      <Navbar />
      <Heading title={getHeadingTitle()} />
      <main className="sm:pt-6 lg:pt-8 pb-12" role="main">
        <Container>{renderDetails()}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Details;
