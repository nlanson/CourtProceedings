const SD = 'assets/sprites';
export enum PheonixActionsList {
    NORMAL,
    CONFIDENT,
    CORNERED,
    DAMAGE,
    BREAKDOWN,
    HEADSHAKE,
    NOD,
    POINT,
    READ,
    SILLY,
    SIP,
    SLAM,
    THINKING
}

//Tuple stores the action frames and frame count.
//Unnecessary for dialog since it will be looping.
type ActionInfo = [string, number];

export type ActionTracker = {
    pre: ActionInfo | null,
    dialog: ActionInfo,
    post: ActionInfo | null
}

//Dictionary to store all the actions Pheonix can take based on the ActionList Enum above.
//Store the action frames location and frame count for pre and post.
//ONLY STORES CORRECT DATA FOR NORMAL ACTION AT THE MOMENT FOR TESTING
export const PheonixActionsDictionary:Record<PheonixActionsList, ActionTracker> = {
    [PheonixActionsList.NORMAL]: {
        pre: null,
        dialog: ['sprites/pheonix/normal/normal_talking/', 21],
        post: ['sprites/pheonix/normal/normal_stand/', 8] //Need to edit to add more time between blinks
    },
    [PheonixActionsList.CONFIDENT]: {
        pre: null,
        dialog: ['confident_talking', 0],
        post: ['confident_stand', 0]
    },
    [PheonixActionsList.CORNERED]: {
        pre: null,
        dialog: ['cornered_talking', 0],
        post: ['cornered_stand', 0]
    },
    [PheonixActionsList.DAMAGE]: {
        pre: ['damage', 0],
        dialog: ['cornered_talking', 0],
        post: ['cornered_stand', 0]
    },
    [PheonixActionsList.BREAKDOWN]: {
        pre: null,
        dialog: ['breakdown', 0],
        post: null
    },
    [PheonixActionsList.HEADSHAKE]: {
        pre: ['headshake', 0],
        dialog: ['normal_talking', 0],
        post: ['normal_stand', 0]
    },
    [PheonixActionsList.NOD]: {
        pre: ['nod', 0],
        dialog: ['normal_talking', 0],
        post: ['normal_stand',0]
    },
    [PheonixActionsList.POINT]: {
        pre: ['point_motion', 0],
        dialog: ['point_talking', 0],
        post: ['point_stand', 0]
    },
    [PheonixActionsList.READ]: {
        pre: null,
        dialog: ['read_talking', 0],
        post: ['read_stand', 0]
    },
    [PheonixActionsList.SILLY]: {
        pre: null,
        dialog: ['silly_talking', 0],
        post: ['silly_stand', 0]
    },
    [PheonixActionsList.SIP]: {
        pre: ['sip_motion', 0],
        dialog: ['sip_talking', 0],
        post: ['sip_stand', 0]
    },
    [PheonixActionsList.SLAM]: {
        pre: null,
        dialog: ['slam_talking', 0],
        post: ['slam_stand', 0]
    },
    [PheonixActionsList.THINKING]: {
        pre: null,
        dialog: ['thinking_talking', 0],
        post: ['thinking_stand', 0]
    }
}