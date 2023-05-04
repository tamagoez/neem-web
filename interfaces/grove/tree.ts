export type GroveTree = {
  id: number;
  userhandleid: string;
  content: { scontent: string; lcontent: string };
  reaction: {likes: number, rehike: number, reply: number};
};
