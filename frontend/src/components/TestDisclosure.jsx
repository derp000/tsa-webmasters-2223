import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const TestDisclosure = () => {
  return (
    <Disclosure>
      <Disclosure.Button>
        Do you offer technical support?
        <ChevronRightIcon className="ui-open:rotate-90 ui-open:transform" />
      </Disclosure.Button>
      <Disclosure.Panel>No</Disclosure.Panel>
    </Disclosure>
  );
};

export default TestDisclosure;
