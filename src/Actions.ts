const SD = 'assets/sprites';
export type PheonixActionsList = 
'normal'
| 'confident'
| 'cornered'
| 'damage'
| 'breakdown'
| 'headshake'
| 'nod'
| 'point'
| 'read'
| 'silly'
| 'sip'
| 'slam'
| 'thinking'

//Record of Pheonix Actions and directory to find their assets.
export const pheonixActions: Record<PheonixActionsList, Array<string>> = {
    normal: [`${SD}/pheonix/normal/normal_talking`, `${SD}/pheonix/normal/normal_stand`],
    confident: [`${SD}/pheonix/confident/confident_talking`, `${SD}/pheonix/confident/confident_stand`],
    cornered: [`${SD}/pheonix/cornered/cornered_talking`, `${SD}/pheonix/cornered/cornered_stand`],
    damage: [`${SD}/pheonix/damage/damage`, `${SD}/pheonix/damage/cornered_talking`, `${SD}/pheonix/damage/cornered_stand`],
    breakdown: [`${SD}/pheonix/breakdown/breakdown`],
    headshake: [`${SD}/pheonix/headshake/headshake`, `${SD}/pheonix/headshake/normal_talking`, `${SD}/pheonix/headshake/normal_stand`],
    nod: [`${SD}/pheonix/nod/nod`, `${SD}/pheonix/nod/normal_talking`, `${SD}/pheonix/nod/normal_stand`],
    point: [`${SD}/pheonix/point/point_motion`, `${SD}/pheonix/point/point_talking`, `${SD}/pheonix/point/point_stand`],
    read: [`${SD}/pheonix/read/read_talking`, `${SD}/pheonix/read/read_standing`],
    silly: [`${SD}/pheonix/silly/silly_talking`, `${SD}/pheonix/silly/silly_stand`],
    sip: [`${SD}/pheonix/sip/sip_stand`, `${SD}/pheonix/sip/sip_motion`, `${SD}/pheonix/sip/sip_talking`, `${SD}/pheonix/sip/sip_stand`],
    slam: [`${SD}/pheonix/slam/slam_talking`, `${SD}/pheonix/slam/slam_stand`],
    thinking: [`${SD}/pheonix/thinking/thinking_talking`, `${SD}/pheonix/thinking/thinking_stand`]
}