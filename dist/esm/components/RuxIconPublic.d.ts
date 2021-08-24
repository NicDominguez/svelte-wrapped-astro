import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPublicProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPublic["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPublic["size"];
}
interface RuxIconPublicEvents {
}
interface RuxIconPublicSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPublic extends SvelteComponent {
    $$prop_def: RuxIconPublicProps;
    $$events_def: RuxIconPublicEvents;
    $$slot_def: RuxIconPublicSlots;
    $on<K extends keyof RuxIconPublicEvents>(type: K, callback: (e: RuxIconPublicEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPublicProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPublicElement | undefined;
}
export default RuxIconPublic;
