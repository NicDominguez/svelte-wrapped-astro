import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInsertLinkProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInsertLink["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInsertLink["size"];
}
interface RuxIconInsertLinkEvents {
}
interface RuxIconInsertLinkSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInsertLink extends SvelteComponent {
    $$prop_def: RuxIconInsertLinkProps;
    $$events_def: RuxIconInsertLinkEvents;
    $$slot_def: RuxIconInsertLinkSlots;
    $on<K extends keyof RuxIconInsertLinkEvents>(type: K, callback: (e: RuxIconInsertLinkEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInsertLinkProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInsertLinkElement | undefined;
}
export default RuxIconInsertLink;
