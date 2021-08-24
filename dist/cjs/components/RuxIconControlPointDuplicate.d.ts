import { Components } from '@astrouxds/astro-web-components';
interface RuxIconControlPointDuplicateProps {
    /** The fill color for the icon */
    color?: Components.RuxIconControlPointDuplicate["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconControlPointDuplicate["size"];
}
interface RuxIconControlPointDuplicateEvents {
}
interface RuxIconControlPointDuplicateSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconControlPointDuplicate extends SvelteComponent {
    $$prop_def: RuxIconControlPointDuplicateProps;
    $$events_def: RuxIconControlPointDuplicateEvents;
    $$slot_def: RuxIconControlPointDuplicateSlots;
    $on<K extends keyof RuxIconControlPointDuplicateEvents>(type: K, callback: (e: RuxIconControlPointDuplicateEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconControlPointDuplicateProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconControlPointDuplicateElement | undefined;
}
export default RuxIconControlPointDuplicate;
