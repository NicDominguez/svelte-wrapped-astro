import { Components } from '@astrouxds/astro-web-components';
interface RuxIconControlPointProps {
    /** The fill color for the icon */
    color?: Components.RuxIconControlPoint["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconControlPoint["size"];
}
interface RuxIconControlPointEvents {
}
interface RuxIconControlPointSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconControlPoint extends SvelteComponent {
    $$prop_def: RuxIconControlPointProps;
    $$events_def: RuxIconControlPointEvents;
    $$slot_def: RuxIconControlPointSlots;
    $on<K extends keyof RuxIconControlPointEvents>(type: K, callback: (e: RuxIconControlPointEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconControlPointProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconControlPointElement | undefined;
}
export default RuxIconControlPoint;
