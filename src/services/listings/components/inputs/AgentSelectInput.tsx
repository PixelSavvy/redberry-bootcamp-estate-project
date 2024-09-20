import { useState } from 'react';

import {
  PlusIconRounded,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { useGetAgentsQuery } from '@/services/agents/api/agentsApiSlice';
import { AgentFormTrigger } from '@/services/agents/components/AgentFormTrigger';

export const AgentSelectInput = ({
  onValueChange,
  value,
}: {
  onValueChange: (id: string) => void;
  value: string;
}) => {
  const { data: agents } = useGetAgentsQuery(null);
  const [isAgentFormOpen, setIsAgentFormOpen] = useState(false);

  return (
    <div>
      <Select
        required
        name="agent_id"
        value={value.toString()}
        onValueChange={(id) => {
          if (id === 'add-agent') {
            setIsAgentFormOpen(true);
          } else {
            onValueChange(id);
          }
        }}
      >
        <SelectTrigger id="agent_id">
          <SelectValue placeholder="აირჩიეთ აგენტი" />
        </SelectTrigger>
        <SelectContent alignOffset={0} className="w-[374.8px]" side="bottom">
          <SelectItem className="px-2.5 py-3" value="add-agent">
            <div className="flex items-center justify-start gap-2">
              <PlusIconRounded />
              <span>დაამატე აგენტი</span>
            </div>
          </SelectItem>

          {agents?.map((agent) => (
            <SelectItem
              key={agent.id}
              className="text-foreground"
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              value={agent.id!.toString()}
            >
              <span className="mr-1">{agent.name}</span>
              <span>{agent.surname}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <AgentFormTrigger
        isGhost
        isOpen={isAgentFormOpen}
        setIsOpen={setIsAgentFormOpen}
      />
    </div>
  );
};
