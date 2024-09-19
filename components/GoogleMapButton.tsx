'use client'

import { Button } from "./ui/button";

const openGoogleMaps = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/DPPp5u97hyquMeDr8";
  window.open(googleMapsUrl, "_blank"); // Open in a new tab
};

const GoogleMapButton = () => {
  return (
    <Button
      onClick={openGoogleMaps}
      className='bg-[#179bd9] hover:bg-[#179bd9]/70 hover:text-white'>
      View on google map
    </Button>
  );
};

export default GoogleMapButton;
