import { useQuery } from "@tanstack/react-query";
import type { FunctionComponent, Player } from "../common/types";
import PlayerSearch from "../features/player-search/components";
import { getPlayerSearch } from "../features/player-search/api";
import { useEffect, useState } from "react";
import { random } from "lodash";
import { Box } from "@mui/material";
import VirtualPlayerList from "../components/ui/player-list";

export const Home = (): FunctionComponent => {
  const [queryEnabled, setQueryEnabled] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState({playerName: ''})
  const [queryId, setQueryId] = useState<number>(random(1, 1000))
  const [playerData, setPlayerData] = useState<Array<Player>>([])

  // Search query is made from the page level, not the component level
  const {data} = useQuery<Array<Player>>({
    enabled: queryEnabled,
    queryKey: ['player-search', queryId ,searchQuery],
    queryFn: async () => getPlayerSearch(searchQuery.playerName),
  });

  const handleSubmit = (playerName: string): void => {
    if (!playerName || playerName.length < 3) {
      setPlayerData([]);
      return;
    }
    setSearchQuery({playerName});
    setQueryId(random(1, 1000));
    setQueryEnabled(true);
  }

  useEffect(() => {
    if (data) {
      setPlayerData(data);
    }
  }, [data])

	return (
		<Box className="container">
      <Box>
        <PlayerSearch handleSubmit={handleSubmit}/>
      </Box>
      {playerData && playerData.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <VirtualPlayerList items={playerData}/>
        </Box>
      )}
		</Box>
	);
};
