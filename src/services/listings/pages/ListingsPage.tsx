import { Link } from 'react-router-dom';

import { Button, PlusIcon } from '@/components/ui';
import { paths } from '@/router/paths';
import { AgentFormTrigger } from '@/services/agents/components/AgentFormTrigger';
import { Filter } from '@/services/filter';

export const ListingsPage = () => {
  return (
    <section className="mt-76 w-full">
      <div className="flex items-center justify-between">
        <section className="flex items-center justify-between gap-6 rounded-10 border p-[0.375rem]">
          <Filter />
        </section>
        <div className="flex items-center justify-between gap-4">
          <Button asChild>
            <Link to={paths.addListing}>
              <PlusIcon className="fill-current" />
              <span>ლისტინგის დამატება</span>
            </Link>
          </Button>
          <AgentFormTrigger />
        </div>
      </div>
    </section>
  );
};
