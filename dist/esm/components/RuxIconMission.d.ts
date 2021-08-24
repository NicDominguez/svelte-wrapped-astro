import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMissionProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMission["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMission["size"];
}
interface RuxIconMissionEvents {
}
interface RuxIconMissionSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMission extends SvelteComponent {
    $$prop_def: RuxIconMissionProps;
    $$events_def: RuxIconMissionEvents;
    $$slot_def: RuxIconMissionSlots;
    $on<K extends keyof RuxIconMissionEvents>(type: K, callback: (e: RuxIconMissionEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMissionProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMissionElement | undefined;
}
export default RuxIconMission;
