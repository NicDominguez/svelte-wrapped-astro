import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRestorePageProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRestorePage["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRestorePage["size"];
}
interface RuxIconRestorePageEvents {
}
interface RuxIconRestorePageSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRestorePage extends SvelteComponent {
    $$prop_def: RuxIconRestorePageProps;
    $$events_def: RuxIconRestorePageEvents;
    $$slot_def: RuxIconRestorePageSlots;
    $on<K extends keyof RuxIconRestorePageEvents>(type: K, callback: (e: RuxIconRestorePageEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRestorePageProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRestorePageElement | undefined;
}
export default RuxIconRestorePage;
