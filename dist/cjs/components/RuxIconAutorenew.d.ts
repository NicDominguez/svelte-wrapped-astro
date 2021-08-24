import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAutorenewProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAutorenew["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAutorenew["size"];
}
interface RuxIconAutorenewEvents {
}
interface RuxIconAutorenewSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAutorenew extends SvelteComponent {
    $$prop_def: RuxIconAutorenewProps;
    $$events_def: RuxIconAutorenewEvents;
    $$slot_def: RuxIconAutorenewSlots;
    $on<K extends keyof RuxIconAutorenewEvents>(type: K, callback: (e: RuxIconAutorenewEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAutorenewProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAutorenewElement | undefined;
}
export default RuxIconAutorenew;
