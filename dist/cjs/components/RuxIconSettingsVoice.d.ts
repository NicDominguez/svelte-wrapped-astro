import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsVoiceProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsVoice["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsVoice["size"];
}
interface RuxIconSettingsVoiceEvents {
}
interface RuxIconSettingsVoiceSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsVoice extends SvelteComponent {
    $$prop_def: RuxIconSettingsVoiceProps;
    $$events_def: RuxIconSettingsVoiceEvents;
    $$slot_def: RuxIconSettingsVoiceSlots;
    $on<K extends keyof RuxIconSettingsVoiceEvents>(type: K, callback: (e: RuxIconSettingsVoiceEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsVoiceProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsVoiceElement | undefined;
}
export default RuxIconSettingsVoice;
