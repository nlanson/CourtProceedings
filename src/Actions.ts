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
type ActionInfo = [string, number];

export type ActionTracker = {
    pre: ActionInfo | null,
    dialog: ActionInfo,
    post: ActionInfo | null
}

//Dictionary to store all the actions Pheonix can take based on the ActionList Enum above.
//Store the action frames location and frame count for pre and post.
//The ones that need fixing have frames written on top of each other for some reason.
export const PheonixActionsDictionary:Record<PheonixActionsList, ActionTracker> = {
    [PheonixActionsList.NORMAL]: {
        pre: null,
        dialog: ['sprites/pheonix/normal/normal_talking/', 21],
        post: ['sprites/pheonix/normal/normal_stand/', 8] //Need to edit to add more time between blinks
    },
    [PheonixActionsList.CONFIDENT]: {
        pre: null,
        dialog: ['sprites/pheonix/confident/confident_talking/', 20],
        post: ['sprites/pheonix/confident/confident_stand/', 0]
    },
    [PheonixActionsList.CORNERED]: {
        pre: null,
        dialog: ['sprites/pheonix/cornered/cornered_talking2/', 19],
        post: ['sprites/pheonix/cornered/cornered_stand2/', 19]
    },
    [PheonixActionsList.DAMAGE]: {
        pre: ['sprites/pheonix/damage/damage2/', 13],
        dialog: ['sprites/pheonix/cornered/cornered_talking2/', 19],
        post: ['sprites/pheonix/cornered/cornered_stand2/', 19]
    },
    [PheonixActionsList.BREAKDOWN]: {
        pre: null,
        dialog: ['sprites/pheonix/breakdown/', 0],
        post: null
    },
    [PheonixActionsList.HEADSHAKE]: {
        pre: ['sprites/pheonix/headshake/headshake2/', 9],
        dialog: ['sprites/pheonix/normal/normal_talking/', 21],
        post: ['sprites/pheonix/normal/normal_stand/', 8]
    },
    [PheonixActionsList.NOD]: {
        pre: ['sprites/pheonix/nod/nod2/', 4],
        dialog: ['sprites/pheonix/normal/normal_talking/', 21],
        post: ['sprites/pheonix/normal/normal_stand/', 8]
    },
    [PheonixActionsList.POINT]: {
        pre: ['sprites/pheonix/point/point_motion2/', 3],
        dialog: ['sprites/pheonix/point/point_talking/', 17],
        post: ['sprites/pheonix/point/point_stand/', 0]
    },
    [PheonixActionsList.READ]: {
        pre: null,
        dialog: ['sprites/pheonix/read/read_talking2/', 19],
        post: ['sprites/pheonix/read/read_stand2/', 20]
    },
    [PheonixActionsList.SILLY]: {
        pre: null,
        dialog: ['sprites/pheonix/silly/silly_talking/', 20],
        post: ['sprites/pheonix/silly/silly_stand/', 0]
    },
    [PheonixActionsList.SIP]: { //NOT YET CONVERTED
        pre: ['sip_motion', 0],
        dialog: ['sip_talking', 0],
        post: ['sip_stand', 0]
    },
    [PheonixActionsList.SLAM]: {
        pre: null,
        dialog: ['sprites/pheonix/slam/slam_talking/', 21],
        post: ['sprites/pheonix/slam/slam_stand/', 8]
    },
    [PheonixActionsList.THINKING]: {
        pre: null,
        dialog: ['sprites/pheonix/thinking/thinking_talking/', 21],
        post: ['sprites/pheonix/thinking/thinking_stand/', 26]
    }
}