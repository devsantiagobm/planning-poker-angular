
export interface ClassroomAndPlayersResponse {
    classroom: Classroom;
    players:   Player[];
}

export interface Classroom {
    _id:          string;
    name:         string;
    owners:       string[];
    typeOfScores: string;
}

export interface Player {
    _id:      string;
    username: string;
    type:     string;
    socketID: string;
    roomID:   string;
    vote?: string;
}

export interface RevealCardsResponse {
    average:       string;
    amountOfVotes: AmountOfVote[];
}

export interface AmountOfVote {
    label: string;
    times: number;
}

export type Modals = "invite-players"