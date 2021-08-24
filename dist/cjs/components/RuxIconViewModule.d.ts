import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewModuleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewModule["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewModule["size"];
}
interface RuxIconViewModuleEvents {
}
interface RuxIconViewModuleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewModule extends SvelteComponent {
    $$prop_def: RuxIconViewModuleProps;
    $$events_def: RuxIconViewModuleEvents;
    $$slot_def: RuxIconViewModuleSlots;
    $on<K extends keyof RuxIconViewModuleEvents>(type: K, callback: (e: RuxIconViewModuleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewModuleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewModuleElement | undefined;
}
export default RuxIconViewModule;
