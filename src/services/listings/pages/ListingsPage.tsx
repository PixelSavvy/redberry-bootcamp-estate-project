import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, PlusIcon } from '@/components/ui';
import { paths } from '@/router/paths';
import { AgentFormTrigger } from '@/services/agents/components/AgentFormTrigger';
import { Filter } from '@/services/filter';
import { FilterTags } from '@/services/filter/components/FilterTag/FilterTags';
import { useGetListingsQuery } from '@/services/listings';
import { ListingsList } from '@/services/listings/components/listing/ListingsList';

export const ListingsPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    data: listings,
    isLoading,
    isError,
    isSuccess,
  } = useGetListingsQuery(null);

  return (
    <div className="mt-20 w-full space-y-8">
      <section className="flex items-start justify-between">
        <div className="flex flex-col items-start justify-start gap-6">
          <Filter />
          <section>
            <FilterTags />
          </section>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Button asChild>
            <Link to={paths.addListing}>
              <PlusIcon className="fill-current" />
              <span>ლისტინგის დამატება</span>
            </Link>
          </Button>
          <AgentFormTrigger
            isGhost={false}
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
          />
        </div>
      </section>
      <section className="mt-20">
        <ListingsList
          data={listings}
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </section>
    </div>
  );
};
