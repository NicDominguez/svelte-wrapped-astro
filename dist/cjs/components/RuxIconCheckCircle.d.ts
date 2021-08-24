import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCheckCircleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCheckCircle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCheckCircle["size"];
}
interface RuxIconCheckCircleEvents {
}
interface RuxIconCheckCircleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCheckCircle extends SvelteComponent {
    $$prop_def: RuxIconCheckCircleProps;
    $$events_def: RuxIconCheckCircleEvents;
    $$slot_def: RuxIconCheckCircleSlots;
    $on<K extends keyof RuxIconCheckCircleEvents>(type: K, callback: (e: RuxIconCheckCircleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCheckCircleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCheckCircleElement | undefined;
}
export default RuxIconCheckCircle;
