import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSupervisedUserCircleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSupervisedUserCircle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSupervisedUserCircle["size"];
}
interface RuxIconSupervisedUserCircleEvents {
}
interface RuxIconSupervisedUserCircleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSupervisedUserCircle extends SvelteComponent {
    $$prop_def: RuxIconSupervisedUserCircleProps;
    $$events_def: RuxIconSupervisedUserCircleEvents;
    $$slot_def: RuxIconSupervisedUserCircleSlots;
    $on<K extends keyof RuxIconSupervisedUserCircleEvents>(type: K, callback: (e: RuxIconSupervisedUserCircleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSupervisedUserCircleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSupervisedUserCircleElement | undefined;
}
export default RuxIconSupervisedUserCircle;
