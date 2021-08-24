import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPauseCircleFilledProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPauseCircleFilled["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPauseCircleFilled["size"];
}
interface RuxIconPauseCircleFilledEvents {
}
interface RuxIconPauseCircleFilledSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPauseCircleFilled extends SvelteComponent {
    $$prop_def: RuxIconPauseCircleFilledProps;
    $$events_def: RuxIconPauseCircleFilledEvents;
    $$slot_def: RuxIconPauseCircleFilledSlots;
    $on<K extends keyof RuxIconPauseCircleFilledEvents>(type: K, callback: (e: RuxIconPauseCircleFilledEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPauseCircleFilledProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPauseCircleFilledElement | undefined;
}
export default RuxIconPauseCircleFilled;
