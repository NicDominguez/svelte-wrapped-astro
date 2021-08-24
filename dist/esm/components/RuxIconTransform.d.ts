import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTransformProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTransform["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTransform["size"];
}
interface RuxIconTransformEvents {
}
interface RuxIconTransformSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTransform extends SvelteComponent {
    $$prop_def: RuxIconTransformProps;
    $$events_def: RuxIconTransformEvents;
    $$slot_def: RuxIconTransformSlots;
    $on<K extends keyof RuxIconTransformEvents>(type: K, callback: (e: RuxIconTransformEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTransformProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTransformElement | undefined;
}
export default RuxIconTransform;
