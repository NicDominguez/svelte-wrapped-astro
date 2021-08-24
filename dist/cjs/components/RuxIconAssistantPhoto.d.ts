import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAssistantPhotoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAssistantPhoto["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAssistantPhoto["size"];
}
interface RuxIconAssistantPhotoEvents {
}
interface RuxIconAssistantPhotoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAssistantPhoto extends SvelteComponent {
    $$prop_def: RuxIconAssistantPhotoProps;
    $$events_def: RuxIconAssistantPhotoEvents;
    $$slot_def: RuxIconAssistantPhotoSlots;
    $on<K extends keyof RuxIconAssistantPhotoEvents>(type: K, callback: (e: RuxIconAssistantPhotoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAssistantPhotoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAssistantPhotoElement | undefined;
}
export default RuxIconAssistantPhoto;
