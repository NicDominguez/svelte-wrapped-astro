import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsInputSvideoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsInputSvideo["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsInputSvideo["size"];
}
interface RuxIconSettingsInputSvideoEvents {
}
interface RuxIconSettingsInputSvideoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsInputSvideo extends SvelteComponent {
    $$prop_def: RuxIconSettingsInputSvideoProps;
    $$events_def: RuxIconSettingsInputSvideoEvents;
    $$slot_def: RuxIconSettingsInputSvideoSlots;
    $on<K extends keyof RuxIconSettingsInputSvideoEvents>(type: K, callback: (e: RuxIconSettingsInputSvideoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsInputSvideoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsInputSvideoElement | undefined;
}
export default RuxIconSettingsInputSvideo;
