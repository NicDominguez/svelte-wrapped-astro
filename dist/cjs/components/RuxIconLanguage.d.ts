import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLanguageProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLanguage["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLanguage["size"];
}
interface RuxIconLanguageEvents {
}
interface RuxIconLanguageSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLanguage extends SvelteComponent {
    $$prop_def: RuxIconLanguageProps;
    $$events_def: RuxIconLanguageEvents;
    $$slot_def: RuxIconLanguageSlots;
    $on<K extends keyof RuxIconLanguageEvents>(type: K, callback: (e: RuxIconLanguageEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLanguageProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLanguageElement | undefined;
}
export default RuxIconLanguage;
