interface TeamMemberCardProps {
    name: string;
    image: string;
    specialization: string;
    email: string;
    role: string;
}

export function TeamMemberCard({ name, image, specialization, email, role }: TeamMemberCardProps) {
    return (
        <div className="flex flex-col items-center p-4 space-y-4">
            <div className="w-40 h-40 rounded-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-center space-y-2">
                <h3 className="font-medium text-lg">{name}</h3>
                <p className="text-sm text-gray-600">{specialization}</p>
                <p className="text-sm text-blue-600">{email}</p>
            </div>
            <h2 className="text-sm font-small tracking-wider text-muted-foreground mb-8">
                {role}
            </h2>
        </div>
    );
}