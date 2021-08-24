import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPlayCircleFilledWhiteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPlayCircleFilledWhite["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPlayCircleFilledWhite["size"];
}
interface RuxIconPlayCircleFilledWhiteEvents {
}
interface RuxIconPlayCircleFilledWhiteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPlayCircleFilledWhite extends SvelteComponent {
    $$prop_def: RuxIconPlayCircleFilledWhiteProps;
    $$events_def: RuxIconPlayCircleFilledWhiteEvents;
    $$slot_def: RuxIconPlayCircleFilledWhiteSlots;
    $on<K extends keyof RuxIconPlayCircleFilledWhiteEvents>(type: K, callback: (e: RuxIconPlayCircleFilledWhiteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPlayCircleFilledWhiteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPlayCircleFilledWhiteElement | undefined;
}
export default RuxIconPlayCircleFilledWhite;
