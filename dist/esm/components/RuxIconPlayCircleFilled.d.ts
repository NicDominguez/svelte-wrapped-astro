import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPlayCircleFilledProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPlayCircleFilled["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPlayCircleFilled["size"];
}
interface RuxIconPlayCircleFilledEvents {
}
interface RuxIconPlayCircleFilledSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPlayCircleFilled extends SvelteComponent {
    $$prop_def: RuxIconPlayCircleFilledProps;
    $$events_def: RuxIconPlayCircleFilledEvents;
    $$slot_def: RuxIconPlayCircleFilledSlots;
    $on<K extends keyof RuxIconPlayCircleFilledEvents>(type: K, callback: (e: RuxIconPlayCircleFilledEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPlayCircleFilledProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPlayCircleFilledElement | undefined;
}
export default RuxIconPlayCircleFilled;
