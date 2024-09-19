import { Button, PlusIcon } from '@/components/ui';
import { AgentFormTrigger } from '@/services/agents/components/AgentFormTrigger';
import { Filter } from '@/services/filter/components/Filter';

export const ListingsPage = () => {
  return (
    <section className="mt-76 w-full">
      <div className="flex items-center justify-between">
        <section className="flex items-center justify-between gap-6 rounded-10 border p-[0.375rem]">
          <Filter />
        </section>
        <div className="flex items-center justify-between gap-4">
          <Button>
            <PlusIcon className="fill-current" />
            <span>ლისტინგის დამატება</span>
          </Button>
          <AgentFormTrigger />
        </div>
      </div>
    </section>
  );
};
