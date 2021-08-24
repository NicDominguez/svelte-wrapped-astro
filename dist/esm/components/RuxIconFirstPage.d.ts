import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFirstPageProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFirstPage["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFirstPage["size"];
}
interface RuxIconFirstPageEvents {
}
interface RuxIconFirstPageSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFirstPage extends SvelteComponent {
    $$prop_def: RuxIconFirstPageProps;
    $$events_def: RuxIconFirstPageEvents;
    $$slot_def: RuxIconFirstPageSlots;
    $on<K extends keyof RuxIconFirstPageEvents>(type: K, callback: (e: RuxIconFirstPageEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFirstPageProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFirstPageElement | undefined;
}
export default RuxIconFirstPage;
