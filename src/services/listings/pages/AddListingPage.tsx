import { ListingForm } from '@/services/listings/components/ListingForm';

export const AddListingPage = () => {
  return (
    <>
      <h1 className="text-32 font-medium">ლისტინგის დამატება</h1>
      <section className="mb-24 mt-[3.75rem] w-[46.875rem]">
        <ListingForm />
      </section>
    </>
  );
};
