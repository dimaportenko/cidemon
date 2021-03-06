import {useDynamic} from 'lib';
import React from 'react';
import {Linking, Text, TouchableWithoutFeedback, View} from 'react-native';
import tw from 'tailwind-rn';
import {TempoButton} from './TempoButton.component';

interface IProps {
  visible?: boolean;
  onRequestClose: () => void;
}

export let GiftModal = ({visible, onRequestClose}: IProps) => {
  let dynamic = useDynamic();
  if (!visible) {
    return null;
  }

  function openMail() {
    Linking.openURL(
      `mailto:ospfranco@protonmail.com?subject=CI Demon Feedback`,
    );

    onRequestClose();
  }

  return (
    <TouchableWithoutFeedback
      style={tw(`flex-1 bg-red-500`)}
      onPress={onRequestClose}>
      <View
        style={tw(
          `absolute h-full w-full ${dynamic(
            `bg-gray-900`,
            `bg-white`,
          )} justify-center items-center`,
        )}>
        <View
          style={tw(`w-96 rounded p-4 ${dynamic(`bg-gray-900`, `bg-white`)}`)}>
          <Text style={tw(`text-lg font-semibold`)}>On this version</Text>
          <Text style={tw('mt-2')}>
            › Nodes can now be displayed on two rows, toggle it in the general
            config
          </Text>
          <Text style={tw('mt-2')}>
            › Have you checked out the http pings? useful to make sure your
            services are up and running
          </Text>
          <Text style={tw('mt-2')}>
            › All new UI, not only on the main screen but also on the config
            screens
          </Text>
          <Text style={tw('mt-2')}>
            ›  Github checks now also show a time stamp
          </Text>
          <Text style={tw('mt-2')}>
            › You can access github checks directly, just open the node and click
            on the sub items
          </Text>
          <Text style={tw('mt-2')}>
            › Fixed gitlab for users with a lot of repos/pipelines
          </Text>

          <Text style={tw(`mt-4`)}>
            If you have any other doubts or suggestions don't hesitate to write!
          </Text>
          <TempoButton
            style={tw(`mt-8`)}
            title="OK!"
            onPress={onRequestClose}
            primary
          />
          <TempoButton
            style={tw(`mt-2`)}
            title="Send Feedback"
            onPress={openMail}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
