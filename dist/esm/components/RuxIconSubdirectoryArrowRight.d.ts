import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSubdirectoryArrowRightProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSubdirectoryArrowRight["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSubdirectoryArrowRight["size"];
}
interface RuxIconSubdirectoryArrowRightEvents {
}
interface RuxIconSubdirectoryArrowRightSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSubdirectoryArrowRight extends SvelteComponent {
    $$prop_def: RuxIconSubdirectoryArrowRightProps;
    $$events_def: RuxIconSubdirectoryArrowRightEvents;
    $$slot_def: RuxIconSubdirectoryArrowRightSlots;
    $on<K extends keyof RuxIconSubdirectoryArrowRightEvents>(type: K, callback: (e: RuxIconSubdirectoryArrowRightEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSubdirectoryArrowRightProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSubdirectoryArrowRightElement | undefined;
}
export default RuxIconSubdirectoryArrowRight;
