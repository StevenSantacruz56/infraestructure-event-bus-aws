import { Service } from "diod";

import { DomainEventClass } from "../../../../shared/domain/event/DomainEventClass";
import { DomainEventSubscriber } from "../../../../shared/domain/event/DomainEventSubscriber";
import { UserRegisteredDomainEvent } from "../../../../shop/users/domain/UserRegisteredDomainEvent";
import { WelcomeEmailSender } from "./WelcomeEmailSender";

@Service()
export class SendWelcomeEmailOnUserRegistered
	implements DomainEventSubscriber<UserRegisteredDomainEvent>
{
	constructor(private readonly sender: WelcomeEmailSender) {}

	async on(event: UserRegisteredDomainEvent): Promise<void> {
		await this.sender.send(event.id, event.name, event.email);
	}

	subscribedTo(): DomainEventClass[] {
		return [UserRegisteredDomainEvent];
	}

	name(): string {
		return "magnus.retention.send_welcome_email_on_user_registered";
	}
}
